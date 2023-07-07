import Image from "next/image"
import {Icon, Icons} from "@/components/icon";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type ArticleProps = {
    params: { slug: string }
}

export default function Page({ params }: ArticleProps) {
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
                    {/* Clap Button */}
                    <button>
                        <Icon iconPath={Icons.Clap}/>
                    </button>
                    <span className="mx-1"></span>
                    {/* Comment Button */}
                    <button>
                        <Icon iconPath={Icons.Comment}/>
                    </button>
                </div>

                <div className="flex">
                    {/* Text-to-Speech Button */}
                    <button>
                        <Icon iconPath={Icons.Play}/>
                    </button>
                    <span className="mx-1"></span>
                    {/* Bookmark Button */}
                    <button>
                        <Icon iconPath={Icons.Bookmark}/>
                    </button>
                    <span className="mx-1"></span>
                    {/* Share Button */}
                    <button>
                        <Icon iconPath={Icons.Share}/>
                    </button>
                </div>
            </div>

            {/* Article Body */}
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
    favoritesCount:  23_000,
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

