import { ReactComponent as Blackmores } from "@/assets/images/Blackmores.svg";
import { ReactComponent as NordicNaturals } from "@/assets/images/NordicNaturals.svg";
import { ReactComponent as NatureMade } from "@/assets/images/NatureMade.svg";
import { ReactComponent as BioGaia } from "@/assets/images/BioGaia.svg";
import { ReactComponent as NaturesWay } from "@/assets/images/NaturesWay.svg";
import { SupplementDisplayProps } from "../components/SupplementDisplay";
import { RecommendationItemProps } from "../components/RecommendationItem";

export const originalSupplements: Array<
  Pick<SupplementDisplayProps, "suppInfo">
> = [
  {
    suppInfo: {
      name: "Multivitamins",
      Display: Blackmores,
      brand: "Blackmores",
      displayClassName: "w-[80px] h-[119px]",
      frequency: "Daily, 1 time a day",
      timer: "Now",
      description:
        "Supplement the inadequate nutrients from imbalanced diet. One-a-day formula with 20 essential nutrients",
      prevention: ["Malnutrition", "Vitamin Deficiency"],
    },
  },
  {
    suppInfo: {
      name: "Omega-3",
      Display: NordicNaturals,
      brand: "NordicNaturals",
      displayClassName: "w-[85px] h-[122px]",
      frequency: "Daily, 1 time a day",
      timer: "Now",
      description:
        "A generous, non-concentrated serving of omega-3s for everyday support for the heart and brain, in pure, great-tasting liquid and soft gels.",
      prevention: ["Cardiovascular diseases", "Joint pain", "Renal diseases"],
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
      name: "Calcium",
      Display: NaturesWay,
      brand: "Natures' Way",
      displayClassName: "w-[77px] h-[129px]",
      frequency: "Daily, 1 time a day",
      timer: "14:00:00",
      description:
        "Your bones and muscles are responsible for helping you do what you love, whether that’s long walks with your dog, dance classes, or bike rides. Support them with Calcium-Magnesium-Vitamin D complex! It’s made with calcium and magnesium, which are essential for healthy bones, teeth, and muscle function, plus vitamin D to assist in the proper transport and retention of calcium.",
      prevention: ["Osteoporosis", "Hypertension", "Colon cancer"],
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
  {
    name: "Omega-3",
    brand: "Nordic Naturals",
    dosageForm: "capsules",
    price: 109,
    servingPerContainer: 30,
    SupplementImage: NordicNaturals,
    imageClassName: "w-[58px] h-[58px] -ml-2 -mr-3",
  },
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
  {
    name: "Calcium",
    brand: "Nature's Way",
    dosageForm: "tablets",
    price: 89,
    servingPerContainer: 30,
    SupplementImage: NaturesWay,
    imageClassName: "w-[35px] h-[58px] ml-1",
  },
];
