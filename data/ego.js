// import api from 'lib/axios';
// import useSWR from 'swr';

export default function getAlterEgoById(id) {
    const egos = [{
        id: "sadbrad",
        name: "Sad Brad",
        about: "sad brad is sad",
        image: "test",
        links: "https://instagram.com/sadbrad",
      },
      {
        id: "nicodays",
        name: "Nico Days",
        about: "nico dayssss",
        image: "test",
        links: "https://instagram.com/nicodays",
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

return {
    data: egos.find(ego => ego.id === id)
}
}
