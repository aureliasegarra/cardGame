const Board = () => {

    const INITIAL_GAME_STATE = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "","","","","", "", "", "", "", "", "", "", "", "", "", "", "","","","","","","","","","",""];

    return (
        <div className="h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-zinc-100 via-gray-900 to-slate-500 flex flex-col justify-center items-center">
            <div className="w-[800px] flex flex-wrap ">
                {INITIAL_GAME_STATE.map((card, index) => (
                    <div className="h-[80px] w-[60px] mr-3 mb-3 rounded-lg border-dashed border-2 border-slate-500">{card}</div>
                ))}
            </div>





        </div>
    )
}

export default Board