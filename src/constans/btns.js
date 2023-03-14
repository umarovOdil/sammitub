import {
  Checkroom,
  Cottage,
  DeveloperMode,
  FaceRetouchingNatural,
  FitnessCenter,
  GraphicEq,
  MenuBook,
  Movie,
  MusicNote,
  OndemandVideo,
  School,
  SlowMotionVideo,
  SportsEsports,
  Subscriptions,
  TheaterComedy,
  VideoLibrary,
  Whatshot,
} from "@mui/icons-material";

export const categoryBtn = [
  { name: "Tajvid", icon: <MenuBook /> ,className:'active' },
  { name: "New", icon: <Whatshot /> },
  { name: "Movie", icon: <Movie /> },
  { name: "Live", icon: <OndemandVideo /> },
  { name: "Gaming", icon: <SportsEsports /> },
  { name: "Education", icon: <School /> },
  { name: "Sport", icon: <FitnessCenter /> },
  { name: "Comedy", icon: <TheaterComedy /> },
  { name: "Podcast", icon: <GraphicEq /> },
  { name: "Fashion", icon: <Checkroom /> },
  { name: "Crypto", icon: <DeveloperMode /> },
  { name: "GYM", icon: <FitnessCenter /> },
  { name: "Beauty", icon: <FaceRetouchingNatural /> },
  { name: "Music", icon: <MusicNote /> },
];

export const MenuBtns = [
  { name: "Home", icon: <Cottage /> ,className:'btnActive' },
  { name: "Shorts", icon: <SlowMotionVideo /> },
  { name: "Subscriptions", icon: <Subscriptions /> },
  { name: "Library", icon: <VideoLibrary /> },
]
