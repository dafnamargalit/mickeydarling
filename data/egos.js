// import api from 'lib/axios';
// import useSWR from 'swr';

export default function getAlterEgos() {
  const egos = [{
    id: "sadbrad",
    name: "Sad Brad",
    about: "why are you always so sad, brad? sad brad, otherwise known as one of skyler molina’s solo projects. where you can go to cry your eyes out while laying in bed or scream your heart out while driving home from that brutal 10 hour shift at denny’s. sad brad’s newest single “ran into u last night” is available now on all streaming platforms!",
    image: "/sadbrad.png",
    socials: {
      instagram: "sadbrad42069",
      spotify: "https://open.spotify.com/artist/73ejSZ5vfEzjfVZUkQev9R?si=Qo39yljrR5ieftE1C0A_qg",
      youtube: "https://www.youtube.com/@sadbrad42069",
      twitter: "https://x.com/sadbrad42069"
    },
    embed: "7IF8pv-iaoI?si=hyYn-4uLetlBGDIp"
  },
  {
    id: "nicodays",
    name: "Nico Days",
    about: "hello!!! nico days is austin medrano’s very own solo project!!!! a world that takes indie & alternative & flips it all on it’s head. (nico’s newest single “MAYBE I’LL SEE YOU AGAIN” is available on all streaming platforms!!!)",
    image: "/nicodays.jpg",
    socials: {
      instagram: "nico__days",
      spotify: "https://open.spotify.com/artist/0svVmptxEtCoEJfcPKxCCh?si=snlrdxauS3iJ4-CWknKoeQ",
      youtube: "https://www.youtube.com/channel/UCPhzuZGmuxgyu9InEOZoPrw",
    },
    embed: "tkwobJThJFw?si=lkOhw0zLub3my9jy"
  },
  {
    id: "latenightjog",
    name: "Late Night Jog",
    about: "late night jog is a separate side project consisting of both skyler molina and austin medrano. an experimental “hip hop” sound just for the fusk of it. (late night jog’s newest single WATCH UR TONE is available on all streaming platforms!)",
    image: "/latenightjog.png",
    socials: {
      instagram: "latenightjog",
      spotify: "https://open.spotify.com/artist/0thzUnCs0k8U5HbgY0imSP?si=1X-BzkjVSp22DgS93dSpqw",
      youtube: "https://www.youtube.com/channel/UCUbTbSYP_ss19QCSUmUfnIw",
      twitter: "https://x.com/latenightjog"
    },
    embed: "UHV4lXFKtZk?si=wAJ0BNQ3BTJkIi-I"
  }]


//   const { data, mutate, error } = useSWR(id ? ['ego', id] : null, () =>
//     // api.items.get(id).then((res) => res.data)
//     egos.map(ego => ego.id === id)
//   );

//   const loading = !data && !error;

//   return {
//     loading,
//     data,
//     mutate,
//     error,
//   };

return egos

}
