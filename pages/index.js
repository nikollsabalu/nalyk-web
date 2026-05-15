import { collection, getDocs } from "firebase/firestore";
import db from "../utils/Firebase";

import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
import { hexToRgb } from "../functions/hexToRgb";
import Hero from "./hero"; 
import ProductGrid from "../components/ProductGrid.tsx";

export default function Home({ 
  labels
}) {

  const [cargando, setCargando] = useState(false);
  const [language, setLanguage] = useState("english");
  const [isEnglish, setIsEnglish] = useState(true);
  const [colorTheme, setColorTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('pref-theme') || "dark";
    }
    return "dark";
  });


  const themes = {
    light: {
      primary: '#22c55e',
      secondary: '#75E900',
      accent: '#FF3C5E',
    },
    dark: {
      primary: '#C58FFF',
      secondary: '#9D4EDD',
      accent: '#FF5DA2',
    },
  };

  const [customColors, setCustomColors] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('custom-colors');

      if (saved) {
        const parsed = JSON.parse(saved);
        const prefTheme = localStorage.getItem('pref-theme');

        const baseTheme =
          prefTheme && prefTheme !== 'custom'
            ? themes[prefTheme] || themes.dark
            : themes.dark;

        return {
          ...baseTheme,
          ...parsed,
        };
      }
    }

    return null;
  });



  const currentTheme = customColors || themes[colorTheme] || themes.dark;

  useEffect(() => {
    if (language == "english") {
      setIsEnglish(true);
      return;
    }
    setIsEnglish(false);
  }, [language]);
 

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--color-primary', currentTheme.primary);
    root.style.setProperty('--color-secondary', currentTheme.secondary);
    root.style.setProperty('--color-accent', currentTheme.accent);
    root.style.setProperty('--color-rgb-primary', hexToRgb(currentTheme.primary));
    root.style.setProperty('--color-rgb-secondary', hexToRgb(currentTheme.secondary));
    root.style.setProperty('--color-rgb-accent', hexToRgb(currentTheme.accent));

  }, [currentTheme]);


  const updateGlobalColor = (type, hex) => {
    setCustomColors((prev) => {
      // Si prev es null, intentamos sacar la base del tema seleccionado actualmente
      const base = prev || themes[colorTheme] || themes.hacker;

      return {
        ...base,
        [type]: hex
      };
    });

    // OBLIGATORIO: Si el usuario mueve un color, forzamos el modo custom
    if (colorTheme !== 'custom') {
      setColorTheme('custom');
    }
  };

  const handleChangeTheme = (themeKey) => {
    if (themeKey === 'custom') {
      if (!customColors) {
        const snapshot = themes[colorTheme] || themes.hacker;
        setCustomColors({ ...snapshot });
      }
    } else {
      setCustomColors(null);
    }

    setColorTheme(themeKey);
  };


  useEffect(() => {
    localStorage.setItem('pref-theme', colorTheme);
    if (customColors) {
      localStorage.setItem('custom-colors', JSON.stringify(customColors));
    } else {
      localStorage.removeItem('custom-colors');
    }
  }, [colorTheme, customColors]);
 

  const bestSellers = [
    {
      id: 1,
      name: "Pearl Earrings",
      price: 79.9,
      image: "/hero.png",
      hoverImage: "/hover.png",
    },
    {
      id: 2,
      name: "Star Necklace",
      price: 89.9,
      image: "/hero.png",
      hoverImage: "/hover.png",
    },
    {
      id: 3,
      name: "Star Necklace",
      price: 89.9,
      image: "/hero.png",
      hoverImage: "/hover.png",
    },
    {
      id: 4,
      name: "Star Necklace",
      price: 89.9,
      image: "/hero.png",
      hoverImage: "/hover.png",
    },
    {
      id: 5,
      name: "Star Necklace",
      price: 89.9,
      image: "/hero.png",
      hoverImage: "/hover.png",
    },
    {
      id: 6,
      name: "Star Necklace",
      price: 89.9,
      image: "/hero.png",
      hoverImage: "/hover.png",
    },
    {
      id: 7,
      name: "Star Necklace",
      price: 89.9,
      image: "/hero.png",
      hoverImage: "/hover.png",
    },
    {
      id: 8,
      name: "Star Necklace",
      price: 89.9,
      image: "/hero.png",
      hoverImage: "/hover.png",
    },
    {
      id: 9,
      name: "Star Necklace",
      price: 89.9,
      image: "/hero.png",
      hoverImage: "/hover.png",
    },
    {
      id: 10,
      name: "Star Necklace",
      price: 89.9,
      image: "/hero.png",
      hoverImage: "/hover.png",
    },
  ];


  return (

    <>
      {cargando ? (
        <Spinner />
      ) : (
        <Layout labels={labels}
          isEnglish={isEnglish}
          setLanguage={setLanguage}>
          <div
            style={{
              '--color-primary': currentTheme.primary,
              '--color-secondary': currentTheme.secondary,
              '--color-accent': currentTheme.accent,
              '--color-rgb-primary': hexToRgb(currentTheme.primary),
              '--color-rgb-secondary': hexToRgb(currentTheme.secondary),
              '--color-rgb-accent': hexToRgb(currentTheme.accent),
            }}>
            <Hero />

            <ProductGrid
              title="Los más vendidos"
              products={bestSellers}
            />
          </div>
        </Layout>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const aboutUrl = await getDocs(collection(db, "about"));
  const about = aboutUrl.docs[0].data();

  const projectsArray = [];
  const projectsUrl = await getDocs(collection(db, "projects"));
  projectsUrl.forEach((dato) => {
    projectsArray.push(dato.data());
  });
  const projects = projectsArray;

  const contactUrl = await getDocs(collection(db, "contact"));
  const contact = contactUrl.docs[0].data();

  const labelsUrl = await getDocs(collection(db, "labels"));
  const labels = labelsUrl.docs[0].data();

  return {
    props: {
      about,
      projects,
      contact,
      labels
    },
  };
}
