const TaskList = (props) => {
    const { todo } = props
    const { title, description, date, priority } = todo
    return <li className=" flex flex-col items-stretch z-0">
        <div class="relative flex flex-row items-center justify-between mt-6 w-full text-gray-700 bg-[white] border-2 px-4   shadow-md bg-clip-border rounded-xl ">
            <div className="flex items-center"><input type="checkbox" name="check" id="check" />
            <div class="p-2 pl-5">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {title}
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {description}
                </p>
            </div>
            </div>
            <div class="p-6 pt-0 self-end">
                <button
                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    Remove
                </button>
            </div>
        </div>
    </li>
}

export default TaskList 