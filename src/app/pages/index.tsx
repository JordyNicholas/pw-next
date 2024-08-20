import Image from "next/image";
import test from '/public/test.png';

export default function Body(){
    return(
        <div className="w-full h-full my-3 rounded-3xl shadow-2xl bg-slate-600 inline align-middle justify-center text-center">
            <Image
            src={test}
            alt="Images to sell"
            style={{
                width: '100%',
                height: '100%'
            }}
            priority/>
        </div>
    )
}