new Vue({
    el: "#play",
    data() {
        return {
            playerHealth: 100,
            enemyHealth: 100,
            gameIsRuning: false,
            scores: { player: 0, enemy: 0 },
        };
    },
    methods: {
        startGame() {
            this.gameIsRuning = true;
        },
        attack() {
            let max = 10;
            let min = 3;
            let damage = Math.max(Math.floor(Math.random() * max + 1), min);
            this.enemyHealth -= damage;
            if (this.enemyHealth <= 0) {
                this.enemyHealth = 100;
                this.playerHealth = 100;
                this.scores.player += 1;
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Win :)",
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.gameIsRuning = false;
                return;
            }
            max = 12;
            min = 4;
            damage = Math.max(Math.floor(Math.random() * max + 1), min);
            this.playerHealth -= damage;
            if (this.playerHealth <= 0) {
                this.playerHealth = 100;
                this.enemyHealth = 100;
                this.scores.enemy += 1;
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Your Lose :(",
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.gameIsRuning = false;
                return;
            }
        },
        specialAttack() {},
        help() {},
        finishPlay() {},
    },
});