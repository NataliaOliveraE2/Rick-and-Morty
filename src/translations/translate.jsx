export const translate = (key, value) => {
  const translations = {
    species: {
      Human: "Humano",
      Alien: "Extraterrestre",
    },
    status: {
      Alive: "Vivo",
      Dead: "Muerto",
      unknown: "Desconocido",
    },
    gender: {
      Male: "Masculino",
      Female: "Femenino",
    },
  };

  return translations[key][value] || value;
};