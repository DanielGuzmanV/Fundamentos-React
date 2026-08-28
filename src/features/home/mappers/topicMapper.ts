import type { ComponentType } from "react";
import {lazy} from "react";

export const TOPIC_COMPONENTS: Record<string, ComponentType> = {
  // Topics de los conceptos basicos:
  "jsx": lazy (() => import("../screens/topics/basic/JsxTopic").then(m => ({default: m.JsxTopic})))

  // Topics de los conceptos intermedios:

  // Topis de los conceptos avanzados:
  
}