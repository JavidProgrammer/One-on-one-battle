new Vue({
    el: "#play",
    data() {
        return {
            playerHealth: 100,
            enemyHealth: 100,
            gameIsRuning: false,
            scores: { player: 0, enemy: 0 },
            specialCount: 0,
            helpCount: 0,
        };
    },
    methods: {
        startGame() {
            this.gameIsRuning = true;
        },
        attack() {
            if (this.playerAttack(3, 10)) {
                return;
            } else if (this.enemyAttack(4, 12)) {
                return;
            }
        },
        specialAttack() {
            this.specialCount += 1;
            if (this.playerAttack(6, 16)) {
                return;
            } else if (this.enemyAttack(4, 12)) {
                return;
            }
        },
        help() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
                this.helpCount += 1;
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "question",
                    title: "Your health must be less than 90.",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        },
        finishPlay() {
            this.gameIsRuning = false;
            this.playerHealth = 100;
            this.enemyHealth = 100;
			this.specialCount = 0;
			this.helpCount = 0;
        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max + 1), min);
        },
        playerAttack(min, max) {
            this.enemyHealth -= this.calculateDamage(min, max);
            if (this.enemyHealth <= 0) {
                this.enemyHealth = 100;
                this.playerHealth = 100;
                this.helpCount = 0;
                this.specialCount = 0;
                this.scores.player += 1;
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Win :)",
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.gameIsRuning = false;
                return true;
            }
        },
        enemyAttack(min, max) {
            this.playerHealth -= this.calculateDamage(min, max);
            if (this.playerHealth <= 0) {
                this.playerHealth = 100;
                this.enemyHealth = 100;
                this.helpCount = 0;
                this.specialCount = 0;
                this.scores.enemy += 1;
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Your Lose :(",
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.gameIsRuning = false;
                return true;
            }
        },
    },
});