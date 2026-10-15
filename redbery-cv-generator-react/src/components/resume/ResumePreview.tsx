import { useAppSelector } from '../../store/hook';

export function ResumePreview() {
    // 👈 ვკითხულობთ მთელ რეზიუმეს მონაცემებს უშუალოდ Redux Store-იდან
    const { personalInfo, experiences, educations } = useAppSelector((state) => state.resume);

    return (
        <div className="flex flex-col gap-6 h-full relative">
            <div className="flex justify-between items-start border-b pb-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-red-800">
                        {personalInfo.name} {personalInfo.surname}
                    </h1>
                    {personalInfo.email && <p className="text-gray-600">📧 {personalInfo.email}</p>}
                    {personalInfo.phone_number && <p className="text-gray-600">📱 {personalInfo.phone_number}</p>}

                    {personalInfo.aboutData && (
                        <div className="mt-2">
                            <h3 className="font-bold text-gray-700 text-sm">ჩემ შესახებ</h3>
                            <p className="text-gray-600 text-sm whitespace-pre-wrap">{personalInfo.aboutData}</p>
                        </div>
                    )}
                </div>

                {personalInfo.image && (
                    <img
                        src={personalInfo.image as string}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover border"
                    />
                )}
            </div>

            {/* გამოცდილება */}
            {experiences && experiences.length > 0 && experiences[0].position && (
                <div className="flex flex-col gap-3 border-b pb-6">
                    <h2 className="text-xl font-bold text-red-800">გამოცდილება</h2>
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="flex flex-col gap-1">
                            <p className="font-bold text-gray-800">
                                {exp.position} {exp.employer && ` - ${exp.employer}`}
                            </p>
                            <p className="text-xs text-gray-400">
                                {exp.startDate} {exp.dueDate ? `- ${exp.dueDate}` : ''}
                            </p>
                            {exp.description && <p className="text-sm text-gray-600">{exp.description}</p>}
                        </div>
                    ))}
                </div>
            )}

            {/* განათლება */}
            {educations && educations.length > 0 && educations[0].institute && (
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-bold text-red-800">განათლება</h2>
                    {educations.map((edu, idx) => (
                        <div key={idx} className="flex flex-col gap-1">
                            <p className="font-bold text-gray-800">
                                {edu.institute} {edu.degree && `, ${edu.degree}`}
                            </p>
                            {edu.dueDate && <p className="text-xs text-gray-400">{edu.dueDate}</p>}
                            {edu.description && <p className="text-sm text-gray-600">{edu.description}</p>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}