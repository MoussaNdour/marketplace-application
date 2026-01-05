import type { Service } from "../types";

type Props = {
    service: Service;
};

const ServiceCard = ({ service }: Props) => {
    return (
        <div className="w-[300px] rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition">

            {/* Header */}
            <div className="p-3 border-b">
        <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">
          {service.category}
        </span>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-slate-800">
                    {service.name}
                </h2>

                <p className="text-xs text-slate-500 line-clamp-3">
                    {service.description ?? "No description provided"}
                </p>
            </div>

            {/* Footer */}
            <div className="p-3 border-t text-xs text-slate-400">
                Rating: {service.mark}
            </div>

        </div>
    );
};

export default ServiceCard;
