import Livre from "../models/livres.js";

export const createLivre = async (req, res) => {
  try {
    const newLivre = new Livre(req.body);
    await newLivre.save();
    res.status(201).json(newLivre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getLivres = async (req, res) => {
  const { search, limit: queryLimit, page: queryPage } = req.query;
  const limit = parseInt(queryLimit) || 10;
  const page = parseInt(queryPage) || 1;
  const skip = (page - 1) * limit;

  try {
    const filter = search ? { $text: { $search: search } } : {};
    const count = await Livre.countDocuments(filter);

    const livres = await Livre.find(
      filter,
      search ? { score: { $meta: "textScore" } } : {}
    )
      .sort(search ? { score: { $meta: "textScore" } } : {})
      .skip(skip)
      .limit(limit);

    res.json({
      data: livres,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      totalItems: count,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLivreById = async (req, res) => {
  try {
    const livre = await Livre.findById(req.params.id);
    if (!livre) return res.status(404).json({ message: "Livre non trouvé" });
    res.json(livre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateLivre = async (req, res) => {
  try {
    const updatedLivre = await Livre.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedLivre)
      return res.status(404).json({ message: "Livre non trouvé" });
    res.json(updatedLivre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteLivre = async (req, res) => {
  try {
    const deleted = await Livre.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Livre non trouvé" });
    res.json({ message: "Livre supprimé avec succès" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
