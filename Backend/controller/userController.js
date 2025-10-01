import user from "../models/userModel.js";

export const create = async (req, res) => {
    try {

        const userData = new user(req.body);

        if (!userData) {
            return res.status(404).json({ msg: "User data not found" })
        }
        const saveData = await userData.save();
        // res.status(200).json(saveData)
        res.status(200).json({ status: 401, message: "User Create Successfully!", data: userData })

    } catch (error) {
        res.status(500).json({ "error==>": error.message })
    }
}


export const getAll = async (req, res) => {
    try {
        const userData = await user.find();

        if (!userData) {
            return res.status(404).json({ msg: "User data not found" })
        }
        // res.status(200).json(userData)
        res.status(200).send({ status: 401, message: "All User get Successfully!", data: userData })
    } catch (error) {
        res.status(500).json({ "error==>": error })
    }
}


export const getOne = async (req, res) => {
    try {
        const id = req.params.id
        const exitUser = await user.findById(id)
        if (!exitUser) {
            return res.status(404).json({ message: "User not Exit" })
        }
        // res.status(200).json(exitUser)
           res.status(200).json({ status: 401, message: "User get Successfully!", data: exitUser })

    } catch (error) {
        res.status(500).json({ "error": error })
    }
}
export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await user.findById(id);


        if (!userExist) {
            return res.status(404).json({ message: "User not updated" });
        }
        const updateUser = await user.findByIdAndUpdate(id, req.body, { new: true });


        // res.status(200).json(updateUser);
           res.status(200).json({ status: 401, message: "User Update Successfully!", data: updateUser })
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
}


export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await user.findById(id);


        if (!userExist) {
            return res.status(404).json({ message: "User not deleted" });
        }
        await user.findByIdAndDelete(id);
        res.status(200).json({ message: "User Deleted Successfully" });
        //    res.status(200).json({ status: 401, message: "User Create Successfully!", data: deleteUser })
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
}