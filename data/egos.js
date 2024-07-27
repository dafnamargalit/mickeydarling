// import api from 'lib/axios';
// import useSWR from 'swr';

export default function getAlterEgos() {
    const egos = [{
        id: "sadbrad",
        name: "Sad Brad",
        about: "sad brad is sad",
        image: "/sadbrad.png",
        links: "https://instagram.com/sadbrad",
      },
      {
        id: "nicodays",
        name: "Nico Days",
        about: "nico dayssss",
        image: "/nicodays.jpg",
        links: "https://instagram.com/nicodays",
      },
      {
        id: "latenightjog",
        name: "Late Night Jog",
        about: "late night jog is late",
        image: "/latenightjog.png",
        links: "https://instagram.com/latenightjog",
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
