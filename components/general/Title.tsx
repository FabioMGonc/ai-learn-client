import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const Title = ({headingStart, headingEnd, subtext, hasAction, linkTo}: TitleProps) => {
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-[1.75rem]">
                    <span className="">{headingStart}</span>
                    {headingEnd && (<span className="bg-linear-to-r from-[#10A0F0] to-[#0040A0] bg-clip-text text-transparent ml-2">{headingEnd}</span>)};
                </h2>
                {subtext && (<p className="mt-2 text-zinc-600 text-sm max-w-xl leading-relaxed">{subtext}</p>)};
            </div>
            {hasAction && linkTo && (
                <Link className="shrink-0" href={linkTo}>
                    <Button variant="default" className="gap-2 rounded-lg group">
                        <span className="flex items-center gap-2">{hasAction}</span>
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Button>
                </Link>
            )}
        </div>
    );
}

export default Title;
