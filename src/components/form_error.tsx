import Image from "next/image";

export default function FormError({ errorMessage }: { errorMessage: string }) {
    return (
    <div className="">
        <div className="flex pl-2 p-1 bg-red-100 text-red-900">
            <Image
                src="icons/warning-sign.svg"
                height={18}
                width={18}
                alt=""
            />
            <span className="mx-1"></span>
            <span className="break-normal">{errorMessage}</span>
        </div>
        <div className="mb-3"></div>
    </div>

    )
}