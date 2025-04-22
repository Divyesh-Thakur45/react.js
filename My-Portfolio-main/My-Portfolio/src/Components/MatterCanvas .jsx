import React, { useContext, useEffect, useRef } from 'react';
import Matter from 'matter-js';
import 'matter-wrap';
import 'matter-attractors';
import { ThemeContext } from '../ContextAPI/ContextAPI';

export const MatterCanvas = () => {
  const canvasRef = useRef(null);
  const { themeChange } = useContext(ThemeContext);
  const renderRef = useRef(null);
  const attractiveBodyRef = useRef(null);
  const bodiesRef = useRef([]);
  const circlesRef = useRef({ circle1: [], circle2: [], circle3: [] });

  useEffect(() => {
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    Matter.use('matter-attractors');
    Matter.use('matter-wrap');

    const { Engine, Events, Runner, Render, World, Body, Mouse, Common, Bodies } = Matter;

    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;

    const render = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        showVelocity: false,
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "#ecf0f3",
      },
    });

    renderRef.current = render;

    const runner = Runner.create();
    const world = engine.world;

    const attractiveBody = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      Math.max(dimensions.width / 4, dimensions.height / 4) / 8,
      {
        render: {
          fillStyle: "white",
          strokeStyle: `rgb(0,0,0)`,
          lineWidth: 0,
        },
        isStatic: true,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              };
            },
          ],
        },
      }
    );
    attractiveBodyRef.current = attractiveBody;
    World.add(world, attractiveBody);

    const createBodies = () => {
      const newBodies = [];
      for (let i = 0; i < 60; i++) {
        const x = Common.random(0, render.options.width);
        const y = Common.random(0, render.options.height);
        const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
        const polygonNumber = Common.random(3, 6);

        const body = Bodies.polygon(x, y, polygonNumber, s, {
          mass: s / 80,
          friction: 0,
          frictionAir: 0.02,
          angle: Math.round(Math.random() * 360),
          render: {
            fillStyle: '#FFFFFF',
            strokeStyle: `#DDDDDD`,
            lineWidth: 2,
          },
        });
        newBodies.push(body);
        World.add(world, body);
      }
      bodiesRef.current = newBodies;
    };

    createBodies();

    const createCircles = () => {
      const newCircles = { circle1: [], circle2: [], circle3: [] };
      for (let i = 0; i < 60; i++) {
        const x = Common.random(0, render.options.width);
        const y = Common.random(0, render.options.height);

        const circle1 = Bodies.circle(x, y, Common.random(2, 8), {
          mass: 0.1,
          friction: 0,
          frictionAir: 0.01,
          render: {
            fillStyle: `#f55684`,
            strokeStyle: `#E9202E`,
            lineWidth: 2,
          },
        });
        newCircles.circle1.push(circle1);
        World.add(world, circle1);

        const circle2 = Bodies.circle(x, y, Common.random(2, 20), {
          mass: 6,
          friction: 0,
          frictionAir: 0,
          render: {
            fillStyle: '#4267F8',
            strokeStyle: '#3257E8',
            lineWidth: 4,
          },
        });
        newCircles.circle2.push(circle2);
        World.add(world, circle2);

        const circle3 = Bodies.circle(x, y, Common.random(2, 30), {
          mass: 0.2,
          friction: 0.6,
          frictionAir: 0.8,
          render: {
            fillStyle: "rgb(237,237,237)",
            strokeStyle: `#FFFFFF`,
            lineWidth: 3,
          },
        });
        newCircles.circle3.push(circle3);
        World.add(world, circle3);
      }
      circlesRef.current = newCircles;
    };

    createCircles();

    const mouse = Mouse.create(render.canvas);

    Events.on(engine, 'afterUpdate', function () {
      if (!mouse.position.x) return;
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    Runner.run(runner, engine);
    Render.run(render);

    const resizeHandler = () => {
      dimensions.width = window.innerWidth;
      dimensions.height = window.innerHeight;
      render.canvas.width = dimensions.width;
      render.canvas.height = dimensions.height;
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      window.removeEventListener('resize', resizeHandler);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
    };
  }, []);

  useEffect(() => {
    if (renderRef.current) {
      renderRef.current.options.background = themeChange ? "#ecf0f3" : "#111111";
    }
    if (attractiveBodyRef.current) {
      attractiveBodyRef.current.render.fillStyle = themeChange ? "white" : "black";
    }
    bodiesRef.current.forEach(body => {
      body.render.fillStyle = themeChange ? 'rgba(255, 255, 255, 0.6)' : "#1e1e1e";
      body.render.strokeStyle = themeChange ? `rgba(222, 222, 222, 0.7)` : "black";
    });
    circlesRef.current.circle1.forEach(circle => {
      circle.render.fillStyle = themeChange ? `#dce4e9` : "#222427";
      circle.render.strokeStyle = themeChange ? `#cdd7df` : "#1A1A1A";
    });
    circlesRef.current.circle2.forEach(circle => {
      circle.render.fillStyle = themeChange ? '#e5eaee' : "#2C3939";
      circle.render.strokeStyle = themeChange ? '#dce4e9' : "#1e1e1e";
    });
    circlesRef.current.circle3.forEach(circle => {
      circle.render.fillStyle = themeChange ? "rgb(237,237,237)" : "#171717";
      circle.render.strokeStyle = themeChange ? `#FFFFFF` : "#1e1e1e";
    });
  }, [themeChange]);

  return (
    <div
      ref={canvasRef}
      className='canvas inset-0'
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        overflow: 'hidden'
      }}
    />
  );
};