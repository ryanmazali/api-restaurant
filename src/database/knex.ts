import knexLib from "knex"
import config from "../../knexfile"

export const knex = knexLib(config)