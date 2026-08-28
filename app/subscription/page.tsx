import Title from "@/components/general/Title";
import { PricingTable } from "@clerk/nextjs";


const SubscriptionPage = () => {
    return(
        <div className="page min-h-[90vh]  max-w-7xl sm:mt-12 lg:mt-20">
            <Title headingStart="Escolha" headingEnd="seu plano." subtext="Desbloqueie novos recursos, sessões maiores e outras funcionalidades" />
            <div className="mt-6 w-full">
                <PricingTable />
            </div>
        </div>
    );
}

export default SubscriptionPage;
