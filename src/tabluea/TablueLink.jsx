const tan_darkcatchLink =
  "https://powerme.titan.in/t/Analytic_Team/views/ThirdEye_DarkCatchment_Tanishq/CatchmentAnalysis";
const tan_newcityLink =
  "https://powerme.titan.in/t/Analytic_Team/views/ThirdEye_Penetration_Tanishq/NewCityExpansion";
const tan_peneLink =
  "https://powerme.titan.in/t/Analytic_Team/views/ThirdEye_Expansion_Tanishq/NewStoreLocation";

const all_darkcatchLink =
  "https://powerme.titan.in/t/Analytic_Team/views/ThirdEye_DarkCatchment_AllChannel/CatchmentAnalysis";
const all_peneLink =
  "https://powerme.titan.in/t/Analytic_Team/views/ThirdEye_Expansion_AllChannel/NewStoreLocation";
const all_newcityLink =
  "https://powerme.titan.in/t/Analytic_Team/views/ThirdEye_Penetration_AllChannel/NewCityExpansion";

const wot_darkcatchLink =
  "https://powerme.titan.in/t/Analytic_Team/views/ThirdEye_DarkCatchment_Watches/CatchmentAnalysis";
const wot_peneLink =
  "https://powerme.titan.in/t/Analytic_Team/views/ThirdEye_Expansion_Watches/NewStoreLocation";
const wot_newcityLink =
  "https://powerme.titan.in/t/Analytic_Team/views/ThirdEye_Penetration_Watches/NewCityExpansion";

const tep_darkcatchLink =
  "https://powerme.titan.in/t/Analytic_Team/views/ThirdEye_DarkCatchment_Eyecare/CatchmentAnalysis";
const tep_peneLink =
  "https://powerme.titan.in/t/Analytic_Team/views/ThirdEye_Expansion_Eyecare/NewStoreLocation";
const tep_newcityLink =
  "https://powerme.titan.in/t/Analytic_Team/views/ThirdEye_Penetration_Eyecare/NewCityExpansion";

const channel = "all";

export let darkcatchlink;
export let newcityLink;
export let penelink;
export let homepagelink;
export let homelink;

if (channel === "all") {
  darkcatchlink = all_darkcatchLink;
  newcityLink = all_newcityLink;
  penelink = all_peneLink;
  homelink = "/Thirdeye_Allchannel";
} else if (channel === "tan") {
  darkcatchlink = tan_darkcatchLink;
  newcityLink = tan_newcityLink;
  penelink = tan_peneLink;
  homelink = "/Thirdeye_Tanishq";
} else if (channel === "wot") {
  darkcatchlink = wot_darkcatchLink;
  newcityLink = wot_newcityLink;
  penelink = wot_peneLink;
  homelink = "/Thirdeye_Watches";
} else {
  darkcatchlink = tep_darkcatchLink;
  newcityLink = tep_newcityLink;
  penelink = tep_peneLink;
  homelink = "/Thirdeye_Tep";
}
