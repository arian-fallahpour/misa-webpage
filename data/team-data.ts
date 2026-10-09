import { PostcardType } from "@/Types/TeamTypes";

import elina_rezaei from "@/public/images/team/elina_rezaei.jpeg";
import aria_sajadi from "@/public/images/team/aria_sajadi.jpeg";
import fatema_jamshidi_emitis_honar from "@/public/images/team/fatema_jamshidi_emitis_honar.jpeg";
import sam_abdi_radin_sistani from "@/public/images/team/sam_abdi_radin_sistani.jpeg";
import arian_sajadi from "@/public/images/team/arian_sajadi.jpeg";
import stephanie_naseri from "@/public/images/team/stephanie_naseri.jpeg";
import rojina_payam_rose_moosavian from "@/public/images/team/rojina_payam_rose_moosavian.jpg";
import ryan_eissa from "@/public/images/team/ryan_eissa.jpeg";
import aryan_ahmadi_eilia_rezaei from "@/public/images/team/aryan_ahmadi_eilia_rezaei.jpeg";
import helia_sayad from "@/public/images/team/helia_sayad.jpeg";
import arian_fallahpour from "@/public/images/team/arian_fallahpour.jpeg";
import emitada_honar_aida_rashidy from "@/public/images/team/emitada_honar_aida_rashidy.jpeg";

export const teamTerm = "2026–27";

// Each entry is one postcard. Executives who share a photo share a postcard,
// with members listed left to right as they appear in the photo.
const teamData: PostcardType[] = [
  {
    role: "President",
    imageSrc: elina_rezaei,
    members: [
      {
        name: "Elina Rezaei-Yazdi",
        program: "Honours Life Sciences",
        year: "IV",
        bucketList: "Iran gardi with my friends",
      },
    ],
  },
  {
    role: "President",
    imageSrc: aria_sajadi,
    members: [
      {
        name: "Aria Sajadi Naeini",
        program: "Honours Life Sciences",
        year: "IV",
        bucketList: "Kish with friends",
      },
    ],
  },
  {
    role: "VP Formal Events",
    imageSrc: fatema_jamshidi_emitis_honar,
    members: [
      {
        name: "Fatema Jamshidi",
        program: "Integrated Rehabilitation and Humanities",
        year: "III",
        bucketList: "Go to Kish!",
      },
      {
        name: "Emitis Honarbakhsh",
        program: "Honours Life Sciences",
        year: "IV",
        bucketList: "Ski at Dizin with friends",
      },
    ],
  },
  {
    role: "VP Events",
    imageSrc: sam_abdi_radin_sistani,
    members: [
      {
        name: "Sam Abdi",
        program: "Honours Biochemistry",
        year: "II",
        bucketList: "Damavand",
      },
      {
        name: "Radin Sistani",
        program: "Honours Health Sciences",
        year: "III",
        bucketList: "Shahdad Kaluts",
      },
    ],
  },
  {
    role: "VP Public Relations",
    imageSrc: arian_sajadi,
    members: [
      {
        name: "Arian Sajadi",
        program: "Honours Life Sciences",
        year: "IV",
        bucketList: "Go to Naein!",
      },
    ],
  },
  {
    role: "VP Public Relations",
    imageSrc: null,
    members: [
      {
        name: "Sadaf",
        program: "Mechanical Engineering",
        year: "II",
        favouriteFood: "Loobia polo",
      },
    ],
  },
  {
    role: "VP Public Relations",
    imageSrc: stephanie_naseri,
    members: [
      {
        name: "Stephanie Naseri",
        program: "Honours Biology and Psychology, Neuroscience & Behaviour",
        year: "II",
        favouriteFood: "Ghormeh Sabzi",
      },
    ],
  },
  {
    role: "VP Finance",
    imageSrc: rojina_payam_rose_moosavian,
    members: [
      {
        name: "Rojina Payamipour",
        program: "Honours Political Science in Public Law & Judicial Studies",
        year: "IV",
        favouriteFood: "Sabzi polo + mahi",
      },
      {
        name: "Rose Moosavian",
        program: "Honours Biochemistry",
        year: "IV",
        favouriteFood: "Albaloo polo",
      },
    ],
  },
  {
    role: "VP Administration",
    imageSrc: ryan_eissa,
    members: [
      {
        name: "Ryan Eissa",
        program: "Honours Life Sciences",
        year: "IV",
        bucketList: "Visit Gilan",
      },
    ],
  },
  {
    role: "VP Performing Arts",
    imageSrc: helia_sayad,
    members: [
      {
        name: "Helia Sayadnasab",
        program: "Honours Health Sciences, Child Health Specialization",
        year: "II",
        favouriteFood: "Ghormeh Sabzi",
      },
    ],
  },
  {
    role: "VP Mentorship",
    imageSrc: aryan_ahmadi_eilia_rezaei,
    members: [
      {
        name: "Aryan Ahmadi",
        program: "Honours Biomedical Discovery & Commercialization",
        year: "III",
        bucketList: "Visit Qeshm",
      },
      {
        name: "Eilia Rezaei",
        program: "Honours Life Sciences",
        year: "II",
        bucketList: "Qom 2026",
      },
    ],
  },
  {
    role: "First Year Rep",
    imageSrc: emitada_honar_aida_rashidy,
    members: [
      {
        name: "Emitida Honarbakhsh",
        program: "Life Sciences",
        year: "I",
        bucketList: "Visit Persepolis with my family and go to Kish!",
      },
      {
        name: "Aida Rashidy",
        program: "Medical Radiation Sciences",
        year: "I",
        favouriteFood: "Tahchin",
      },
    ],
  },
  {
    role: "VP Technical",
    imageSrc: arian_fallahpour,
    members: [
      {
        name: "Arian Fallahpour-Sichani",
        program: "Software Engineering",
        year: "IV",
        bucketList: "I want to explore the Zagros Mountains",
        favouriteFood: "Ghormeh Sabzi",
      },
    ],
  },
];

export default teamData;
