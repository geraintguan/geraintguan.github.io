import VikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Head from "../layouts/HeadDefault";
import Layout from "../layouts/LayoutDefault";

export default {
  extends: VikeReact,

  title: "Geraint Guan",

  Head,
  Layout,
} satisfies Config;
