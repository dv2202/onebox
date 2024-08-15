import React from "react";

const ShowSelectedMail = ({ selectedEmail }) => {
  return (
    <div className="w-full h-auto flex flex-col gap-[32px] p-4 rounded-md border-gray-700 bg-[#141518]">
      <div className="w-full py-[12px] px-[16px] flex flex-col gap-[10px]">
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-semibold">{selectedEmail.subject}</h2>
          <p>
            {new Date(selectedEmail.sentAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
        <p>From: {selectedEmail.fromEmail}</p>
        <p>To: {selectedEmail.toEmail}</p>
      </div>
      <div className="mt-4 w-[500px] px-[16px]">
        <div dangerouslySetInnerHTML={{ __html: selectedEmail.body }} />
      </div>
    </div>
  );
};

export default ShowSelectedMail;
