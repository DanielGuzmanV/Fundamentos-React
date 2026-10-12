import type { ComponentType } from "react";
import {lazy} from "react";

export const TOPIC_COMPONENTS: Record<string, ComponentType> = {
  // Topics de los conceptos basicos:
  "jsx": lazy (() => import("../screens/topics/basic/JsxTopic").then(m => ({default: m.JsxTopic}))),
  "componentes": lazy (() => import("../screens/topics/basic/ComponentsTopic").then(m => ({default: m.ComponentsTopic}))),
  "props": lazy(() => import("../screens/topics/basic/PropsTopic").then(m => ({default: m.PropsTopic}))), 
  "estado": lazy(() => import("../screens/topics/basic/StateTopic").then(m => ({default: m.StateTopic}))),
  "eventos": lazy(() => import("../screens/topics/basic/EventsTopic").then(m => ({default: m.EventsTopic}))),
  // Topics de los conceptos intermedios:

  // Topis de los conceptos avanzados:
  
}