function DetailSong() {
    return ( 
        <div className="col-span-1 p-3">
            <h2 className="text-[#3cbce6] font-bold">Now playing</h2>
            <h2 className="text-[#868f9b] text-3xl">Sing me to sleep</h2>
            <div className="w-[240px] m-auto mt-10">
                <img className="w-[240px] h-[240px] object-cover" src='https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/403677110_1789919398122355_7339255759337431988_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BZJhQgbbkQ8AX-X3mS6&_nc_ht=scontent.fhan17-1.fna&oh=00_AfCbulSNuqivVzJMJHL8nCiMqE5KznBRyLl_xYhQfo6Ddw&oe=6566DC26' alt="avatar"/>
            </div>
            <div className="flex justify-evenly items-center mt-10">
                <img className="w-[70px] h-[70px] object-cover rounded-full" src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/404679377_1789152041532424_4179965259806865108_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r72ExhFRP0oAX_T9rC1&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBeUQscwWVOtKFVvu3Rzv_68vGOUmrw1rzJJ28wiLc5FA&oe=65686B66" alt="avatar"/>
                <span className="text-xl text-[#fff]">Alan Walker</span>
            </div>
        </div>
     );
}

export default DetailSong;