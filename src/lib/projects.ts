import { writable } from 'svelte/store';

export type Project = {
    start_date: string;
    end_date: string;
    name: string;
    description: string;
    demo_url: string;
    source_url: string;
    video_path: string | null;
    tags: string[];
};

export const data: Project[] = [
    {
        start_date: "20.3.23",
        end_date: "NOW",
        name: "Vidslide",
        description: `A TikTok, Instagram Reels and YouTube Reels inspired app. Post, edit and delete posts. Frontend hosted on Vercel. Backend hosted on OracleCloud.`,
        demo_url: "https://svelte-kit-vid-slide.vercel.app/en/home",
        source_url: "https://github.com/jonasfroeller/SvelteKit_VidSlide",
        video_path: "/assets/vidslide/screencast.mp4",
        tags: [
            "SvelteKit", "ViteJS", "TailwindCSS", "SkeletonUI", "FloatingUI", "Typesave-i18n", "Iconify", "coollabs", "Zod", "JWT", "MySQL", "Apache", "JS", "TS", "HTML", "PHP", "CSS"
        ]
    },
    {
        start_date: "18.2.23",
        end_date: "NOW",
        name: "Portfolio",
        description: `"jonasfroeller" is my personal website, that I created to show off
        my skills and interests. My name is Jonas, and I am a 17-year-old
        student currently studying at HTBLA Leonding in Austria. I am
        pursuing a field of study in IT/Mediatechnology, and I have a keen
        interest in programming, especially web development. Aside from my
        native language, German, I am also fluent in English, with a B+
        level of proficiency. I have experience working with various
        programming languages, including HTML, CSS, Java, ShellScript,
        JavaScript & NodeJS, PHP, and MySQL & Oracle SQL. Recently, I have
        discovered the Svelte JS-framework and learned Svelte along with
        SvelteKit. I have also gained expertise in working with TailwindCSS.
        This Portfolio is built with DaisyUI & TailwindCSS and statically
        hosted on Netlify & GitHub, hosted with NodeJS on Vercel.`,
        demo_url: "https://jonasfroeller.vercel.app/en",
        source_url: "https://github.com/jonasfroeller/jonasfroeller/tree/master/portfolio",
        video_path: null,
        tags: [
            "HTML", "CSS", "Java", "JavaScript", "NodeJS", "PHP", "Oracle SQL", "ShellScript"
        ]
    },
    {
        start_date: "about",
        end_date: "two years ago",
        name: "Noice",
        description: `This website is about the Austrian band 'Noice'. Noice is a funk/pop
        band formed in Wieselburg in 2020. Their music, strongly influenced
        by pop music combines blues, funk and jazz elements in the most
        exciting way.`,
        demo_url: "https://noice-band.netlify.app",
        source_url: "https://github.com/jonasfroeller/Noice",
        video_path: null,
        tags: [
            "HTML", "CSS", "JavaScript"
        ]
    },
    {
        start_date: "2.7.23",
        end_date: "NOW",
        name: "Taeglich Frisches Obst",
        description: `The band "Täglich frisches Obst," freshly formed in Upper Austria in
        February 2022, consists of five young musicians. With two electric
        guitars, drums, bass, and vocals, the band's lineup is very
        classical, but the music itself is not. Funky grooves, intricate
        guitar chords, and solid basslines are combined with vocals.`,
        demo_url: "https://taeglichfrischesobst.vercel.app",
        source_url: "https://github.com/jonasfroeller/TaeglichFrischesObst",
        video_path: null,
        tags: [
            "HTML", "CSS", "JS", "TS", "SvelteKit", "Vite", "Redis"
        ]
    }
]

export const filteredData = writable(data);