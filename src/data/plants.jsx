import React from "react";
import BananaSvg from "../illustrations/BananaSvg";
import MangoSvg from "../illustrations/MangoSvg";
const plants = {
    banana: {
        name: "香蕉",
        type: "草本植物",
        structure: "假莖由葉鞘堆疊構成，柔軟、含水，容易切斷。",
        svg: <BananaSvg />,
    },
    mango: {
        name: "芒果",
        type: "木本植物",
        structure: "幹部為木質化組織，含木質素，堅硬難砍。",
        svg: <MangoSvg />,
    },
};
export default plants;