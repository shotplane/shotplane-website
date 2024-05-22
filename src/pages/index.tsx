/* eslint-disable @next/next/no-img-element */
import PageSeoHeader from "@/components/SeoHeader";
import { SEOPages } from "@/lib/services/pageSeo/pageSeo.model";
import { useEffect, useState } from "react";

import { useLoader } from "../providers/loading.provider";
import _ from "lodash";
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import { Button, Dropdown, Menu, Navbar } from "react-daisyui";

export default function Login(props) {
  const { setLoading } = useLoader();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [setLoading]);
  return (
    <>
      <PageSeoHeader pageSEO={{ seoPage: SEOPages.HOME }} />
      <header className="fixed w-full text-base-100 z-500 bg-black bg-opacity-60">
        <Navbar>
          <Navbar.Start>
            <Dropdown>
              <Button
                tag="label"
                color="ghost"
                tabIndex={0}
                className="lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </Button>
              <Dropdown.Menu tabIndex={0} className="w-52 menu-sm mt-3 z-[1]">
                <Dropdown.Item href="#home">home</Dropdown.Item>
                <Dropdown.Item href="#squad">Squad</Dropdown.Item>
                <Dropdown.Item href="#class">Class</Dropdown.Item>
                <Dropdown.Item href="#play">Play</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a className="btn btn-ghost normal-case text-xl">SHOT PLANE</a>
          </Navbar.Start>
          <Navbar.Center className="hidden lg:flex">
            <Menu horizontal className="px-1">
              <Menu.Item>
                <a href="#home">Home</a>
              </Menu.Item>
              <Menu.Item>
                <a href="#squad">Squad</a>
              </Menu.Item>
              <Menu.Item>
                <a href="#class">Class</a>
              </Menu.Item>
              <Menu.Item>
                <a href="#play">Play</a>
              </Menu.Item>
            </Menu>
          </Navbar.Center>
          <Navbar.End>
            <Button color="warning" size="sm">
              Connect wallet
            </Button>
          </Navbar.End>
        </Navbar>
      </header>
      <main>
        <ParallaxBanner
          layers={[
            {
              image: "images/bg/shot-plane-1.webp",
              speed: -20,
            },
          ]}
          id="home"
          style={{ aspectRatio: "2 / 1" }}
        >
          <section className="w-full grid grid-cols-2">
            <div>
              <div className="flex gap-4 justify-center mt-64">
                <Parallax speed={10}>
                  <img
                    src="/images/planes/30.png"
                    className="w-36"
                    alt="plane"
                  />
                </Parallax>
                <Parallax speed={30}>
                  <img
                    src="/images/planes/31.png"
                    className="w-36"
                    alt="plane"
                  />
                </Parallax>
                <Parallax speed={50}>
                  <img
                    src="/images/planes/32.png"
                    className="w-36"
                    alt="plane"
                  />
                </Parallax>
                <Parallax speed={100}>
                  <img
                    src="/images/planes/33.png"
                    className="w-36"
                    alt="plane"
                  />
                </Parallax>
              </div>

              <div className="flex gap-4 justify-center">
                <Parallax speed={10}>
                  <img
                    src="/images/planes/30.png"
                    className="w-36"
                    alt="plane"
                  />
                </Parallax>
                <Parallax speed={30}>
                  <img
                    src="/images/planes/31.png"
                    className="w-36"
                    alt="plane"
                  />
                </Parallax>
                <Parallax speed={50}>
                  <img
                    src="/images/planes/32.png"
                    className="w-36"
                    alt="plane"
                  />
                </Parallax>
                <Parallax speed={100}>
                  <img
                    src="/images/planes/33.png"
                    className="w-36"
                    alt="plane"
                  />
                </Parallax>
              </div>
            </div>
            <div className="text-white text-32 mt-32">
              <Parallax speed={-20}>
                <div className="bg-yellow-950 p-10 bg-opacity-60">
                  Experience thrilling aerial combat and strategic gameplay as
                  you pilot your plane through various challenges.
                </div>
              </Parallax>
            </div>
          </section>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: "images/bg/shot-plane-2.webp",
              speed: -10,
            },
          ]}
          style={{ aspectRatio: "2 / 1" }}
          className="grid grid-cols-3"
          id="squad"
        >
          <div className="text-white text-32 mt-32">
            <Parallax speed={-20}>
              <div className="bg-yellow-950 p-10 bg-opacity-60">
                Experience thrilling aerial combat and strategic gameplay as you
                pilot your plane through various challenges.
              </div>
            </Parallax>
          </div>
          <div>
            <Component />
            <Component />
          </div>
          <div className="text-white text-32 mt-32">
            <Component />
            <Parallax speed={-50}>
              <div className="bg-yellow-950 p-10 bg-opacity-60">
                Experience thrilling aerial combat and strategic gameplay as you
                pilot your plane through various challenges.
              </div>
            </Parallax>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: "images/bg/shot-plane-3.webp",
              speed: -20,
            },
          ]}
          style={{ aspectRatio: "2 / 1" }}
          className="grid grid-cols-3 gap-10 py-10"
          id="class"
        >
          <div className="text-white text-32">
            <Parallax speed={-15}>
              <div className="bg-yellow-950 p-10 bg-opacity-60">
                <img
                  src="/images/planes/34.png"
                  className="w-40 mx-auto mb-5"
                  alt="plane"
                />
                Experience thrilling aerial combat and strategic gameplay as you
                pilot your plane through various challenges.
                <Button className="block w-full mt-5">View detail</Button>
              </div>
            </Parallax>
          </div>
          <div className="text-white text-32">
            <Parallax speed={-30}>
              <div className="bg-yellow-950 p-10 bg-opacity-60">
                <img
                  src="/images/planes/36.png"
                  className="w-40 mx-auto mb-5"
                  alt="plane"
                />
                Experience thrilling aerial combat and strategic gameplay as you
                pilot your plane through various challenges.
                <Button className="block w-full mt-5">View detail</Button>
              </div>
            </Parallax>
          </div>
          <div className="text-white text-32">
            <Parallax speed={-50}>
              <div className="bg-yellow-950 p-10 bg-opacity-60 text-center">
                <img
                  src="/images/planes/32.png"
                  className="w-40 mx-auto mb-5"
                  alt="plane"
                />
                Experience thrilling aerial combat and strategic gameplay as you
                pilot your plane through various challenges.
                <Button className="block w-full mt-5">View detail</Button>
              </div>
            </Parallax>
          </div>
        </ParallaxBanner>

        <ParallaxBanner
          layers={[
            {
              image: "images/bg/shot-plane-4.webp",
              speed: -20,
            },
          ]}
          style={{ aspectRatio: "2 / 1" }}
          className="flex justify-center items-center px-64 py-10"
          id="play"
        >
          <div className="text-white text-32">
            <Parallax speed={-50}>
              <div className="flex gap-10 bg-yellow-950 p-10 bg-opacity-60">
                <Parallax speed={-10}>
                  <img
                    src="/images/planes/30.png"
                    className="w-80"
                    alt="plane"
                  />
                </Parallax>
                <div className="">
                  Experience thrilling aerial combat and strategic gameplay as
                  you pilot your plane through various challenges.
                  <Button color="warning" className="block w-full mt-5">
                    Play now
                  </Button>
                </div>
              </div>
            </Parallax>
          </div>
        </ParallaxBanner>
      </main>
      <footer className="bg-black bg-opacity-90 text-white text-center p-10">
        <div className="text-32">SHOT PLANE</div>
        <div className="text-16">© 2021 Shot Plane. All rights reserved.</div>
      </footer>
    </>
  );
}

const Component = () => {
  const mage = useParallax<HTMLDivElement>({
    scale: [0.5, 1, "easeInQuad"],
  });

  const frog = useParallax<HTMLDivElement>({
    scaleX: [1, 0, "easeInQuad"],
  });

  const moon = useParallax<HTMLDivElement>({
    scale: [1.5, 1, "easeInQuad"],
  });
  return (
    <div className="mx-auto">
      <div className="spinner text-32">
        <div className="mage" ref={mage.ref}>
          <img src="/images/planes/35.png" className="w-36" alt="plane" />
        </div>
        <div className="frog" ref={frog.ref}>
          <img src="/images/planes/32.png" className="w-36" alt="plane" />
        </div>
        <div className="moon" ref={moon.ref}>
          <img src="/images/planes/36.png" className="w-36" alt="plane" />
        </div>
      </div>
    </div>
  );
};
