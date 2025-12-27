export default function ProfileCard() {
  return (
    <div className="bg-white shadow-xl rounded-xl p-4 w-64">
      <h2 className="font-semibold text-lg">Jaeyeon Won</h2>

      <p className="text-sm text-gray-600 mt-1">
        ECE Software Track @ UT Austin
      </p>

      <div className="mt-3 text-sm space-y-1">
        <p>📧 jaeyeon@email.com</p>
        <p>📍 Austin, TX</p>
      </div>
    </div>
  );
}
