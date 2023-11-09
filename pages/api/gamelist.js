const handler = async (req, res) => {
  try {
    const rawgResponse = await fetch(
      `https://api.rawg.io/api/games?key=6884f8a9be8d43588ef10f6117925076`
    );

    if (!rawgResponse.ok) {
      throw new Error('failed');
    }
    const rawgData = await rawgResponse.json();
    res.status(200).json(rawgData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'internal server error' });
  }
};

export default handler;
