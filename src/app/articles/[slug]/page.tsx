import Image from "next/image"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type ArticleProps = {
    params: {slug: string}
}

export default function Page({params}: ArticleProps) {
    let author = articleData.author;
    let authorProfileLink = `/users/${author.username}`;

    return (
        <div className="flex flex-col items-center">
        <div className="flex flex-col items-start p-9 w-md">
            {/* Title section */}
            <div>
                <h1 className="text-4xl font-bold mb-1">{articleData.title}</h1>
                {/* Fix shade of gray */}
                <p className="text-gray-600 mb-3">{articleData.description}</p>
            </div>

            {/* Author Section */}
            <div className="flex mb-6">
                <a href={authorProfileLink}>
                    <img src={author.image} alt="Author's profile picture"
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full mr-2"/>
                </a>

                <div className="flex flex-col">
                    <div>
                        <a href={authorProfileLink} className="hover:underline">
                            {author.username}</a>
                        <span className="mx-1">·</span>
                        <button className="text-green-700 hover:underline">Follow</button>
                    </div>

                    <div className="text-gray-600">
                        Published in <a href={authorProfileLink} className="text-black hover:underline">{articleData.author.username}</a>
                        <span className="mx-1">·</span>
                         9 min read
                        <span className="mx-1">·</span>
                        Feb 5, 2019
                    </div>
                </div>
            </div>

            {/* Icons section */}
            <div className="flex justify-between w-full">
                <div className="flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-label="clap"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"></path></svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-label="responses" className="kq"><path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path></svg>
                </div>

                <div className="flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0zm9-10a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.38 10.42l-4.6 3.06a.5.5 0 0 1-.78-.41V8.93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84z" fill="currentColor"></path></svg>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className="acs" aria-label="Add to list bookmark button"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#292929"></path></svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z" fill="currentColor"></path></svg>
                </div>
            </div>



            <section className="md-block">
                <ReactMarkdown>{articleData.body}</ReactMarkdown>
            </section>
    </div>
    </div>
    )
}

const articleData = {
    title: "On the occlusion of stars",
    description: "A report concerning the activities of the visitors.",
    body: `In the remote province where Amelia's ranch nestled, the vast celestial tapestry was a source of eternal fascination. The heavens themselves seemed to whisper secrets, revealing the depths of the universe to those willing to listen. But on this particular night, the celestial choir appeared to be silenced, veiled by an inexplicable occlusion.

## Calculations 
\`\`\`
def fib(n):
    if n < 2:
        return 1
    else:
        return fib(n-1) + fib(n-2)
\`\`\`

Amelia, a woman of hardened hands and indomitable spirit, stepped out onto her porch, her eyes casting an inquisitive gaze towards the heavens. The panorama that stretched above her was an inkwell devoid of light. Her heart quickened as the mystery unfurled before her eyes, as if time had slipped into a parallel thread.

And then, an ethereal luminescence pierced through the inky canvas. A manta-shaped vessel, resplendent with celestial luminescence, hovered silently over her ranch, casting an otherworldly glow upon the grassy plains. It seemed as though the stars themselves had descended, congregating within the expanse of this enigmatic visitor.

In awe and trepidation, Amelia ventured closer, her feet moving through the thick night air as though suspended in a dream. The UFO, suspended in its eerie stillness, beckoned her with an intangible allure. As she approached, her senses were intoxicated by an otherness, a subtle vibration that resonated through her very being.

Drawing closer to the unearthly presence, Amelia witnessed a glimpse into the infinite. Within the translucent walls of the vessel, constellations spun and danced, galaxies colliding and birthing nebulous wonders. It was as though the universe had condensed itself into this celestial marvel, granting her the rare privilege of witnessing the secrets that lay beyond the human gaze.

Time, once an immutable force, became a mere abstraction as she stood beneath this cosmic tapestry. Questions that had haunted philosophers and astronomers for centuries coursed through her mind, and yet, in the face of such majesty, they seemed inconsequential.

The manta-shaped emissary lingered for but a moment, and in its departure, a symphony of light cascaded across the night sky. The stars, once occluded, began to emerge, blinking into existence one by one, as if awakening from a celestial slumber. Amelia watched as they reclaimed their rightful place, as if grateful for her witness to the grandeur that resided beyond their veil.

From that night forward, the rancher's heart harbored a secret, a knowing that the universe was far more vast and intricate than she had ever imagined. And though the occlusion of stars had come and gone, the experience had indelibly imprinted upon her soul, guiding her to seek the extraordinary in the seemingly mundane, forever changed by the touch of the enigmatic manta-shaped UFO that had graced her humble abode.`,
    author: {
        username: "Manny",
        bio: "The living embodiement of Manhattan :)",
        image: "https://uploads5.wikiart.org/images/m-c-escher/circle-limit-i.jpg!Large.jpg",
        following: false,
    },
}

