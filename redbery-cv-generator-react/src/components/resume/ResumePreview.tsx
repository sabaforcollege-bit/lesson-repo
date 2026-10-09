import { useEffect, useState } from 'react';
import { getStoredResumeData } from '../../utils/storage';
import type { ResumeFormData } from '../../types/resume';

export function ResumePreview() {
    const [data, setData] = useState<ResumeFormData>(getStoredResumeData());

    useEffect(() => {
        const handleStorageChange = () => {
            setData(getStoredResumeData());
        };

        window.addEventListener('storage_updated', handleStorageChange);
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage_updated', handleStorageChange);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const { personalInfo, experiences, educations } = data;

    return (
        <div className="w-full h-full bg-white p-8 relative flex flex-col justify-between min-h-[600px]">
            <div>
                <div className="flex justify-between items-start pb-6 mb-6">
                    <div className="flex-1 pr-4">
                        {(personalInfo.name || personalInfo.surname) && (
                            <h2 className="text-3xl font-bold text-red-600 mb-2 break-words">
                                {personalInfo.name} {personalInfo.surname}
                            </h2>
                        )}

                        {personalInfo.email && (
                            <p className="text-gray-600 text-sm flex items-center gap-2 mb-1">
                                <span>&#64;</span> {personalInfo.email}
                            </p>
                        )}

                        {personalInfo.phone_number && (
                            <p className="text-gray-600 text-sm flex items-center gap-2 mb-4">
                                <span>&#128222;</span> {personalInfo.phone_number}
                            </p>
                        )}

                        {personalInfo.aboutData && (
                            <div className="mt-4">
                                <h3 className="font-bold text-red-600 text-sm mb-1">ჩემს შესახებ</h3>
                                <p className="text-gray-700 text-sm whitespace-pre-line break-words">
                                    {personalInfo.aboutData}
                                </p>
                            </div>
                        )}
                    </div>

                    {personalInfo.image && (
                        <img
                            src={personalInfo.image}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border"
                        />
                    )}
                </div>

                {experiences && experiences.length > 0 && experiences[0].position && (
                    <div className="pb-6 mb-6">
                        <h3 className="text-lg font-bold text-red-600 mb-3">გამოცდილება</h3>
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-4">
                                <div className="font-semibold text-gray-800">
                                    {exp.position} {exp.employer && `, ${exp.employer}`}
                                </div>
                                {(exp.startDate || exp.dueDate) && (
                                    <div className="text-xs text-gray-400 italic mb-1">
                                        {exp.startDate} / {exp.dueDate}
                                    </div>
                                )}
                                <p className="text-sm text-gray-600">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {educations && educations.length > 0 && educations[0].institute && (
                    <div className="border-t border-b border-gray-200 pt-6 pb-6 mb-6">
                        <h3 className="text-lg font-bold text-red-600 mb-3">განათლება</h3>
                        {educations.map((edu, index) => (
                            <div key={index} className="mb-4">
                                <div className="font-semibold text-gray-800">
                                    {edu.institute} {edu.degree && `, ${edu.degree}`}
                                </div>
                                {edu.dueDate && (
                                    <div className="text-xs text-gray-400 italic mb-1">{edu.dueDate}</div>
                                )}
                                <p className="text-sm text-gray-600">{edu.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex justify-start pt-6">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-lg">
                    &#10022;
                </div>
            </div>
        </div>
    );
}