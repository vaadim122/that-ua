import amazonPrimeLogo from "../assets/images/amazon_prime_logo.svg";
import disneyPlusLogo from "../assets/images/disney_plus_logo.svg";
import hboMaxLogo from "../assets/images/hbo_max_logo.svg";
import huluLogo from "../assets/images/hulu_logo.svg";
import netflixLogo from "../assets/images/netflix_logo.svg";

export const availabilitySourceType = {
  netflix: 1,
  amazonPrime: 2,
  disneyPlus: 3,
  hulu: 4,
  hboMax: 5,
};
export const availabilitySource = [
  {
    type: availabilitySourceType.netflix,
    name: "netflix",
    sourceIds: [203, 440],
    icon: netflixLogo,
    order: 1,
  },
  {
    type: availabilitySourceType.amazonPrime,
    name: "amazonPrime",
    sourceIds: [
      26, 24, 18, 27, 357, 68, 73, 81, 84, 101, 102, 103, 126, 129, 138, 358,
      144, 148, 163, 172, 216, 227, 238, 247, 249, 253, 256, 234, 269, 294, 295,
      301,
    ],
    icon: amazonPrimeLogo,
    order: 2,
  },

  {
    type: availabilitySourceType.disneyPlus,
    name: "disneyPlus",
    sourceIds: [372],
    icon: disneyPlusLogo,
    order: 3,
  },
  {
    type: availabilitySourceType.hulu,
    name: "hulu",
    sourceIds: [157, 159, 385, 386],
    icon: huluLogo,
    order: 4,
  },
  {
    type: availabilitySourceType.hboMax,
    name: "hboMax",
    sourceIds: [387],
    icon: hboMaxLogo,
    order: 5,
  },
];
