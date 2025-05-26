// // localstorage
// import pocketData from "../data/pocketData.json";

// // 로컬스토리지에 데이터 저장
// export const saveToLocalStorage = () => {
//   try {
//     localStorage.setItem("pocketData", JSON.stringify(pocketData));
//     console.log("Data saved to localStorage");
//   } catch (error) {
//     console.error("Error saving to localStorage:", error);
//   }
// };

// // 로컬스토리지에서 데이터 불러오기
// export const loadLocalStorage = () => {
//   try {
//     const data = localStorage.getItem("pocketData");
//     return data ? JSON.parse(data) : pocketData; // 데이터 없으면 기본 JSON 반환
//   } catch (error) {
//     console.error("Error loading from localStorage:", error);
//     return pocketData; // 에러 시 기본 JSON 반환
//   }
// };

// // 초기화: 앱 시작 시 데이터가 없으면 임시 데이터 저장
// export const initializeLocalStorage = () => {
//   if (!localStorage.getItem("pocketData")) {
//     saveToLocalStorage();
//   }
// };

import pocketData from "../data/pocketData.json";
import { PocketData } from "../types";

// 로컬스토리지에 데이터 저장
export const saveToLocalStorage = (data: PocketData) => {
  try {
    localStorage.setItem("happyPocketData", JSON.stringify(data));
    console.log("Data saved to localStorage");
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

// 로컬스토리지에서 데이터 불러오기
export const loadFromLocalStorage = (): PocketData => {
  try {
    const data = localStorage.getItem("happyPocketData");
    const parsedData = data ? JSON.parse(data) : pocketData;
    console.log("Data loaded from localStorage:", parsedData);
    return parsedData;
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    return pocketData;
  }
};

// 초기화: 앱 시작 시 데이터가 없으면 임시 데이터 저장
export const initializeLocalStorage = () => {
  if (!localStorage.getItem("happyPocketData")) {
    saveToLocalStorage(pocketData);
  }
};
