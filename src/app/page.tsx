/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { LocomotiveScrollProvider, useLocomotiveScroll } from "react-locomotive-scroll";

import "./styles/content.css";
import "./styles/setting.css";
import "./styles/locomotive-scroll.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Poppins, Noto_Sans_KR } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700"],
});

const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const mainTeamRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          opacity: 0,
          rotationX: -80,
          transformOrigin: "bottom",
          duration: 1,
          ease: "power2.inOut",
        },
      });

      tl.fromTo(
        ".mv-copy h2:nth-child(1)",
        { opacity: 0, rotationX: -80 },
        { opacity: 1, rotationX: 0 }
      )
        .fromTo(
          ".mv-copy h2:nth-child(2)",
          { opacity: 0, rotationX: -80 },
          { opacity: 1, rotationX: 0 },
          "-=0.8"
        )
        .fromTo(
          ".mv-copy h2:nth-child(3)",
          { opacity: 0, rotationX: -80 },
          { opacity: 1, rotationX: 0 },
          "-=0.8"
        )
        .fromTo(
          ".mv-copy div",
          { opacity: 0, rotationX: -80 },
          { opacity: 1, rotationX: 0 },
          "-=0.8"
        );
    }, contentRef.current as HTMLElement);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.04,
        tablet: {
          smooth: true,
        },
        smartphone: {
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={contentRef}
    >
      <div className={`wrap ${noto_sans_kr.className}`}>
        <div className="container max-w-full" data-scroll-container ref={contentRef}>
          <div className="main-visual">
            <div className="mv-copy">
              <h2 className={poppins.className}>
                <span></span> Quality,
              </h2>
              <h2 className={poppins.className}>
                Efficiency <span></span>,
              </h2>
              <h2 className={poppins.className}>Trust</h2>
              <div>우리의 목표는 가짜 뉴스를 선별하고 사용자에게 정확한 기사를 전달하는 것입니다.</div>
              <div className="mv-button">
                <span className="text-[#000]">
                뉴스의 진실성을 확인하고 정확한 정보를 제공받고 싶다면, 지금 바로 시작해보세요.
                </span>
              </div>
            </div>
          </div>

          <div className="main-intro">
            <div>
              <h2 data-scroll data-scroll-speed="2" data-scroll-delay="0.05">
                정보의 질 향상, 시간의 절약, 신뢰성 확보
              </h2>
              <h3 data-scroll data-scroll-speed="2.3" data-scroll-delay="0.05">
              사용자가 신뢰할 수 있는 정보를 빠르고 정확하게 제공하여, 정보의 질을 향상시키고 시간을 절약하며 신뢰성을 확보합니다.
              </h3>
              <h4 data-scroll data-scroll-speed="2.6" data-scroll-delay="0.05">
          
              </h4>
            </div>
          </div>
          <div className="main-title">
            <div data-scroll>
              <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="10">
                <span>Features &nbsp;</span>
              </h2>
              <h3 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-10">
              다양한 기능을 제공합니다!
              </h3>
            </div>
          </div>

          <div className="main-guide">
            <div>
              <h2 data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
                <span>POSTIVE/NEGERTIBE</span>
              </h2>
              <h3 data-scroll data-scroll-speed="2" data-scroll-delay="0.4">
              긍정적인 뉴스와 부정적인 뉴스가 구분되어 나옵니다
              </h3>
            </div>
          </div>
          <div className="main-title">
            <div data-scroll>
              <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="10">
              자신의 <span>지역에 어떤 뉴스</span>가 있는지 확인 해보세요.
              </h2>
              <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-10">
              
              </h2>
            </div>
          </div>

          <div className="main-needs">
            <div>
              <h2 data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
                사용자들이 좋아하는 <span>뉴스</span>를<span>TOP100</span>을 통해 찾아보세요.
              </h2>
              <h3 data-scroll data-scroll-speed="2" data-scroll-delay="0.4">
                사람들이 좋아하는 뉴스가 TOP100을 통해 나타납니다.
              </h3>
            </div>
          </div>

          <div className="main-title">
            <div data-scroll>
              <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="10">
                <em>카테고리 선택 &nbsp;</em>
              </h2>
              <h3 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-10">
              원하는 카테고리를 선택하여 관심있는 뉴스를 찾아보세요.
              </h3>
            </div>
          </div>

          <div className="main-team" ref={mainTeamRef}>
            <div className="team-title">
              <h2>
                <span>요약된 뉴스</span>를 통해 빠르고 정확한 뉴스를 확인하세요.
              </h2>
            </div>
          </div>
        </div>
        <style jsx global>{`
          body {
            // background-color: black;
            width: 100%;
          }
          .main-footer {
            display: flex;
            flex-direction: row;
            width: 100%;
          }
          .footer-business-name {
            font-size: 0.8rem;
            color: lightgray;
            line-height: 1.5;
            text-align: center;
            padding: 30px 0;
            display: flex;
            flex-direction: column;
            justify-content: between;
            align-items: start;
            width: 90%;
          }
        `}</style>
      </div>
    </LocomotiveScrollProvider>
  );
}
