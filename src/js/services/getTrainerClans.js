export const getTrainerClans = async (trainerId) => {
    try {
        const trainerClans = await fetch(
            `${
                import.meta.env.VITE_BASE_URL
            }/clansTrainers?_embed=user&userId=${trainerId}&_embed=clan`
        ).then((res) => res.json());

        const clans = [trainerClans[0].clanId, trainerClans[1].clanId];
        return clans;
    } catch (error) {
        console.log(error);
    }
};
