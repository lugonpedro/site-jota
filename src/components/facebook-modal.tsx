interface FacebookModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function FacebookModal({
  isOpen,
  setIsOpen,
}: FacebookModalProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-[396px] relative animate-[fadeIn_0.3s_ease-out]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <h2 className="text-xl text-black font-semibold p-4 border-b border-gray-200">
              Log Into Facebook
            </h2>

            <div className="p-4 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Email or phone number"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember password
                </label>
              </div>

              <button className="w-full py-2 px-4 bg-[#1877f2] text-white rounded font-semibold hover:bg-blue-600 transition-colors">
                Log In
              </button>

              <div className="text-center">
                <a href="#" className="text-[#1877f2] text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
