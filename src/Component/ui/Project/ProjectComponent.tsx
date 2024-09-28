"use client";
import React from 'react';
import { Tabs } from "./Project";
import {tabInfo} from '../../../Constant/index.jsx'



export function TabsDemo() {


  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-5">
      <Tabs tabs={tabInfo} />
    </div>
  );
}

