/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["openSans-regular", "Arial", "sans-serif"],
    },
    extend: {
      textColor: {
        accent: "var(--accent)",
        accHover: "var(--btnhover)",
        accentDark: "var(--accentDark)",
        accentLight: "var(--accentLight)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        line: "var(--line)",
        header: "var(--header)",
        body: "var(--body)",
        alert: "var(--alert)",
        disable: "var(--disable)",
        alertDark: "var(--alertDark)",
        warning: "var(--warning)",
        warningDark: "var(--warningDark)",
        success: "var(--success)",
        successDark: "var(--successDark)",
        info: "var(--info)",
        infoDark: "var(--infoDark)",
      },

      backgroundColor: {
        accent: "var(--accent)",
        accentDark: "var(--accentDark)",
        accentLight: "var(--accentLight)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",
        line: "var(--line)",
        header: "var(--header)",
        body: "var(--body)",
        alert: "var(--alert)",
        disable: "var(--disable)",
        alertDark: "var(--alertDark)",
        warning: "var(--warning)",
        warningDark: "var(--warningDark)",
        success: "var(--success)",
        successDark: "var(--successDark)",
        info: "var(--info)",
        infoDark: "var(--infoDark)",
      },

      borderColor: {
        accent: "var(--accent)",
        accentDark: "var(--accentDark)",
        accentLight: "var(--accentLight)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        line: "var(--line)",
        header: "var(--header)",
        body: "var(--body)",
        alert: "var(--alert)",
        disable: "var(--disable)",
        alertDark: "var(--alertDark)",
        warning: "var(--warning)",
        warningDark: "var(--warningDark)",
        success: "var(--success)",
        successDark: "var(--successDark)",
        info: "var(--info)",
        infoDark: "var(--infoDark)",
      },

      fill: {
        accent: "var(--accent)",
        accentDark: "var(--accentDark)",
        accentLight: "var(--accentLight)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        line: "var(--line)",
        header: "var(--header)",
        body: "var(--body)",
        alert: "var(--alert)",
        disable: "var(--disable)",
        alertDark: "var(--alertDark)",
        warning: "var(--warning)",
        warningDark: "var(--warningDark)",
        success: "var(--success)",
        successDark: "var(--successDark)",
        info: "var(--info)",
        infoDark: "var(--infoDark)",
      },

      fontSize: {
        clampH1: "clamp(20px, 5vw, 26px)",
      },

      fontFamily: {
        primary: "Open Sans",
      },

      boxShadow: {
        left: "0px -5px 5px 5px rgba(0,0,0,0.02)",
      },

      keyframes: {
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(2px)" },
          "50%": { transform: "translateX(-2px)" },
          "75%": { transform: "translateX(2px)" },
          "100%": { transform: "translateX(0)" },
        },

        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        backdrop: {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.3 },
        },

        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },

        zoomIn: {
          "0%": { scale: 0.95 },
          "100%": { scale: 1 },
        },

        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 100 },
        },

        slideDown: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(30px)" },
        },

        slideLeft: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0px)" },
        },

        slideNav: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },

        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },

        loading: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },

      transitionTimingFunction: {
        "modal-timing": "cubic-bezier(.17,.67,.8,.29)",
        "timing-nav": "cubic-bezier(.15,.81,.14,.64)",
      },

      animation: {
        shake: "shake .2s ease-in-out",
        backdrop: "backdrop .2s ease-in-out",
        slideUp: "slideUp .2s ease-in-out",
        slideDown: "slideDown .2s ease-in-out",
        slideLeft: "slideLeft .2s ease-in-out",
        slideRight: "slideRight .2s ease-in-out",
        fadeIn: "fadeIn .2s ease-in-out",
        zoomIn: "zoomIn .2s ease-in-out",
        fadeOut: "fadeOut .2s ease-in-out",
        rotate: "rotate 2s linear infinite",
        loading: "loading 1.5s ease-in  infinite",
      },

      screens: {
        xr: { raw: "(min-height: 800px)" },
        poco: { raw: "(min-height: 800px)" },
        loptop: { raw: "(min-height: 700px)" },
        loptopXl: { raw: "(min-height: 900px)" },
        xxs: "412px",
      },
    },
  },
  plugins: [],
};
