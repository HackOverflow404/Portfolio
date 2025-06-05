import React, { useEffect } from 'react'
import "./CircuitBackground.css"

export default function Background() {
  useEffect(() => {
    var can = document.getElementById("canvas") as HTMLCanvasElement | null;
    if (!can) return;
    var ctx = can.getContext("2d");
    if (!ctx) return;
    can.width = window.innerWidth;
    can.height = window.innerHeight;
    can.style.background = "black";
    interface Speed {
      x: number;
      y: number;
    }

    interface Particle {
      x: number;
      y: number;
      speed: Speed;
      ang?: number;
      mag?: number;
      upd: () => void;
    }

    var p: Particle[] = []

    function Clear() {
      if (!ctx || !can) return;
      ctx.fillStyle="rgba(0,0,0,0.07)"
      ctx.fillRect(0,0,can.width,can.height);
    }

    class ParticleClass implements Particle {
      x: number;
      y: number;
      speed: Speed;
      ang?: number;
      mag?: number;
      c: string;
      constructor(x: number, y: number, speed: Speed, c: string) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.c = c;
      }
      upd = () => {
        if (!ctx) return;
        ctx.strokeStyle = this.c;
        ctx.lineWidth = 1;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        this.x += this.speed.x;
        this.y += this.speed.y;
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        this.ang = Math.atan2(this.speed.y, this.speed.x);
        this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
        var op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
        var ch = Math.floor(Math.random() * op.length);
        if (Math.random() < 0.05) {
          this.speed.x = Math.cos(op[ch]) * this.mag;
          this.speed.y = Math.sin(op[ch]) * this.mag;
        }
      };
    }
    var speed = 5;
    var period = 1000;
    function pulse() {
      setTimeout(pulse, period);
      var h = Math.random() * (210 - 150) + 150;
      if (!can) return;
      for (var i = 0; i < 56; i++) {
        p.push(
          new ParticleClass(
            can.width / 2,
            can.height / 2,
            {
              x: Math.cos((i / 8) * 2 * Math.PI) * speed,
              y: Math.sin((i / 8) * 2 * Math.PI) * speed,
            },
            "hsl(" + h + ",100%,50%)"
          )
        );
      }
    }

    function gameMove(){
      requestAnimationFrame(gameMove)
      Clear()
      for(var i = 0; i < p.length; i++) {
        p[i].upd();
        if (
          !can ||
          p[i].x < 0 ||
          p[i].x > can.width ||
          p[i].y < 0 ||
          p[i].y > can.height
        ) {
          p.splice(i, 1);
        }
      }
    }
    pulse()
    gameMove()
  }, []);
  return (
    <canvas id="canvas" className="absolute inset-0 z-0 gradient-background">

    </canvas>
  );
}
