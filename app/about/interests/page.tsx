import React from "react";

const Interests: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto mt-3 mb-4 ">
            <h1 className="text-4xl font-bold mb-4">Interests</h1>
            <ul className="list-disc pl-5 space-y-1">
                <li className="md:text-lg">
                    <strong>Graphic Design:</strong> I want to learn digital painting and really like creative photo editing.
                </li>
                <li className="md:text-lg">
                    <strong>Favorite Writers & People:</strong> Acharya Prashant, Osho, Jiddu Krishnamurti, Fyodor Dostoevsky, and Friedrich Nietzsche, Aakanksha, Mom & Dad.
                </li>
                <li className="md:text-lg">
                    <strong>Calligraphy:</strong> I like to buy lots of calligraphy pen &  I love calligraphy.
                </li>
            </ul>
        </div>
    );
}

export default Interests;