import { ReactComponent as Blackmores } from "@/assets/images/Blackmores.svg";
import { ReactComponent as Gullon } from "@/assets/images/Gullon.svg";
import { ReactComponent as NOWFoods } from "@/assets/images/NOWFoods.svg";
import { ReactComponent as NordicNaturals } from "@/assets/images/NordicNaturals.svg";
import { ReactComponent as NatureMade } from "@/assets/images/NatureMade.svg";
import { ReactComponent as BioGaia } from "@/assets/images/BioGaia.svg";
import { ReactComponent as NaturesWay } from "@/assets/images/NaturesWay.svg";
import { ReactComponent as Calcium } from "@/assets/images/Calcium.svg";
import { ReactComponent as Insulin } from "@/assets/images/Insulin.svg";
import { SupplementDisplayProps } from "../components/SupplementDisplay";
import { RecommendationItemProps } from "../components/RecommendationItem";

export const originalSupplements: Array<
  Pick<SupplementDisplayProps, "suppInfo">
> = [
  {
    suppInfo: {
      name: "Insulin",
      Display: Insulin,
      brand: "",
      displayClassName: "w-[89px] h-[119px]",
      frequency: "Daily, 3 shots a day",
      timer: "Now",
      description:
        "Lower blood glucose levels by promoting the uptake of glucose into cells and the storage of excess glucose as glycogen. Injection about 15 minutes before meal is recommended",
      prevention: [],
    },
  },
  // {
  //   suppInfo: {
  //     name: "Multivitamins",
  //     Display: Blackmores,
  //     brand: "Blackmores",
  //     displayClassName: "w-[80px] h-[119px]",
  //     frequency: "Daily, 1 time a day",
  //     timer: "Now",
  //     description:
  //       "Supplement the inadequate nutrients from imbalanced diet. One-a-day formula with 20 essential nutrients",
  //     prevention: ["Malnutrition", "Vitamin Deficiency"],
  //   },
  // },
  {
    suppInfo: {
      name: "Starch Neutralizer",
      Display: NOWFoods,
      brand: "NOW Foods",
      displayClassName: "w-[85px] h-[122px]",
      frequency: "Daily, 3 time a day",
      timer: "Now",
      description:
        "A non-stimulant white kidney bean extract that can help to delay the breakdown of dietary starches by limiting the action of the digestive enzyme alpha-amylase. Take 3 capsules before any meal containing complex carbohydrates or starches, or as directed by a healthcare practitioner.",
      prevention: ["Diabetes", "Obesity"],
    },
  },
  {
    suppInfo: {
      name: "Vitamin D",
      Display: NatureMade,
      brand: "NatureMade",
      displayClassName: "w-[76px] h-[131px]",
      frequency: "Daily, 1 time a day",
      timer: "15:00:00",
      description:
        "This is a high dose vitamin D product for those with higher vitamin D needs and/or deficiency, as determined by a healthcare professional. Consult with your healthcare professional before use. Take 1 softgel daily with a meal. For easier swallowing, take with water before and during ingestion.",
      prevention: ["Osteoporosis", "Diabetes", "Multiple sclerosis"],
    },
  },
  {
    suppInfo: {
      name: "Probiotics",
      Display: BioGaia,
      brand: "BioGaia",
      displayClassName: "w-[101px] h-[121px]",
      frequency: "Daily, 1 time a day",
      timer: "15:00:00",
      description:
        "BioGaia® Protectis® tabs is a dietary supplement containing the patented lactic acid bacterium Lactobacillus** reuteri Protectis (L. reuteri DSM 17938) that helps the good microorganisms keep a natural balance in the gut.",
      prevention: ["Digestive disorders", "Hay fever"],
    },
  },
  {
    suppInfo: {
      name: "Diabetes Health Pack",
      Display: NaturesWay,
      brand: "Natures' Way",
      displayClassName: "w-[77px] h-[129px]",
      frequency: "Daily, 1 time a day",
      timer: "14:00:00",
      description:
        "Formulated with a comprehensive combination of key vitamins, minerals and other supplements to provide daily nutritional support for people with diabetes or prediabetes.",
      prevention: ["Malnutrition", "Diabetes"],
    },
  },
];

export const recommendedSupplements: Array<RecommendationItemProps> = [
  {
    name: "Multivitamins",
    brand: "Blackmores",
    dosageForm: "capsules",
    price: 89,
    servingPerContainer: 30,
    SupplementImage: Blackmores,
    imageClassName: "w-[39px] h-[58px]",
  },
  // {
  //   name: "Digestive Biscuits (Sugar-Free)",
  //   brand: "Gullon",
  //   dosageForm: "g",
  //   price: 52.9,
  //   servingPerContainer: 400,
  //   SupplementImage: Gullon,
  //   imageClassName: "w-[50px] h-[50px]",
  // },
  {
    name: "Omega-3",
    brand: "Nordic Naturals",
    dosageForm: "capsules",
    price: 109,
    servingPerContainer: 30,
    SupplementImage: NordicNaturals,
    imageClassName: "w-[58px] h-[58px] -ml-2 -mr-3",
  },
  // {
  //   name: "Starch Neutralizer",
  //   brand: "NOW Foods",
  //   dosageForm: "capsules",
  //   price: 156,
  //   servingPerContainer: 120,
  //   SupplementImage: NOWFoods,
  //   imageClassName: "w-[58px] h-[58px] -ml-2 -mr-3",
  // },
  {
    name: "Vitamin D",
    brand: "Nature Made",
    dosageForm: "tablets",
    price: 69,
    servingPerContainer: 30,
    SupplementImage: NatureMade,
    imageClassName: "w-[58px] h-[58px] -ml-2 -mr-[10px]",
  },
  {
    name: "Probiotics",
    brand: "BioGaia",
    dosageForm: "tablets",
    price: 59,
    servingPerContainer: 30,
    SupplementImage: BioGaia,
    imageClassName: "w-[58px] h-[58px] -ml-2 -mr-[9px]",
  },
  // {
  //   name: "Diabetes Health Pack",
  //   brand: "Nature's Way",
  //   dosageForm: "packets",
  //   price: 184,
  //   servingPerContainer: 30,
  //   SupplementImage: NaturesWay,
  //   imageClassName: "w-[55px] h-[55px] -ml-1 pl-1",
  // },
  {
    name: "Calcium",
    brand: "Nature's Way",
    dosageForm: "tablets",
    price: 89,
    servingPerContainer: 30,
    SupplementImage: Calcium,
    imageClassName: "w-[35px] h-[58px] ml-1",
  },
];
