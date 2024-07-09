import { css } from '@emotion/react';

export const tailwindSubset = css`
  :root {
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-scroll-snap-strictness: proximity;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
  }

  .z-1000 {
    z-index: 1000;
  }
  .relative {
    position: relative;
  }
  .ease-out {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  .ease-in {
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  }
  .duration-400 {
    transition-duration: 400ms;
  }
  .duration-500 {
    transition-duration: 500ms;
  }
  .opacity-0 {
    opacity: 0;
  }
  .opacity-100 {
    opacity: 1;
  }
  .scale-95 {
    --tw-scale-x: 0.95;
    --tw-scale-y: 0.95;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  .scale-100 {
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .inset-0 {
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  .fixed {
    position: fixed;
  }
  .text-center {
    text-align: center;
  }
  .p-4 {
    padding: 1rem;
  }
  .justify-center {
    justify-content: center;
  }
  .items-center {
    align-items: center;
  }
  .min-h-full {
    min-height: 100%;
  }
  .flex {
    display: flex;
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
      0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  .align-middle {
    vertical-align: middle;
  }
  .text-left {
    text-align: left;
  }
  .p-6 {
    padding: 1.5rem;
  }
  .bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  .rounded-2xl {
    border-radius: 1rem;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .transform {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  .max-w-md {
    max-width: 28rem;
  }
  .w-full {
    width: 100%;
  }
  .h-full {
    height: 100%;
  }
  .z-5 {
    z-index: 5;
  }
  .rounded-t-2xl {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  .t-screen {
    top: 100vh;
  }
  .t-20 {
    top: 5rem;
  }
  .bg-s-purple {
    background-color: rgba(106, 0, 255, 0.87);
  }
  .bg-s-yellow {
    background-color: rgb(255, 223, 57, 0.8);
  }
  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;
