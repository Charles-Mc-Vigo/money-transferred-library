import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TransactionTable from "./components/TransactionTable";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Summary from "./pages/Summary";
import Export from "./components/Export";

function App() {
    // State to track the active content
    const [activeContent, setActiveContent] = useState("Transaction");

    return (
        <div className="h-screen flex flex-col">
            {/* Navbar */}
            <div className="h-auto bg-white shadow-md">
                <Navbar onSelect={(content) => setActiveContent(content)} />
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-1/4 bg-gray-200 p-4">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 overflow-auto bg-gray-100">
                    {activeContent === "Transaction" && <TransactionTable />}
                    {activeContent === "Summary" && <Summary />}
                    {activeContent === "Export" && <Export />}
                    
                </div>
            </div>

            {/* Footer */}
            <div className="h-12 bg-gray-300 text-center flex items-center justify-center">
                <Footer />
            </div>
        </div>
    );
}

export default App;