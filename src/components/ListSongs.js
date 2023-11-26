function ListSongs() {
    return (
        <div className="col-span-2">
            <table className="table-auto w-full">
                <thead className="text-[#fff] h-12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[10%]">Author</th>
                        <th className="w-[10%]"><i className="fa fa-download"></i></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">1</td>
                        <td className="">1</td>
                        <td className="text-center">1</td>
                        <td className="text-center">1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ListSongs;