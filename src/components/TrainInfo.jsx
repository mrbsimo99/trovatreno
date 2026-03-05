const TrainInfo = ({ trainData }) => {

    if (!trainData) {
        return null;
    }

    const getTrainType = (category) => {
        const types = {
            'REG': 'Regionale',
            'IC': 'InterCity',
            'FR': 'Frecciarossa',
            'FA': 'Frecciargento',
            'FB': 'Frecciabianca',
            'EC': 'EuroCity',
            'EN': 'EuroNight'
        };
        return types[category] || category
    }

    const stateColor = (state) => {
        if (state.includes('in orario')) return "text-green-600";
        if (state.includes('ritardo')) {
            return 'text-red-600';
        }
        return 'text-gray-700'
    }

    return (<>

        <div className="max-w-2xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:scale-[1.01] transition-all duration-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {getTrainType(trainData.data.categoria)} {trainData.data.numeroTreno}
            </h2>
            <p className="text-gray-700 mb-2 font-semibold hover:text-red-600 transition-colors cursor-default">
                Da: {trainData.data.origine}
            </p>
            <p className="text-gray-700 mb-2 font-semibold hover:text-red-600 transition-colors cursor-default">
                A: {trainData.data.destinazione}
            </p>
            <p className={`font-semibold ${stateColor(trainData.data.compRitardo[0])} hover:scale-105 transition-transform inline-block`}>
                Stato: {trainData.data.compRitardo[0]}
            </p>

            {trainData.data.stazioneUltimoRilevamento !== "--" && (
                <p className="text-gray-500 text-sm mt-4 pt-4 border-t border-gray-200 hover:border-red-400 transition-colors">
                    Ultimo rilevamento: {trainData.data.stazioneUltimoRilevamento}
                </p>
            )}
        </div>

    </>
    )
}

export default TrainInfo;