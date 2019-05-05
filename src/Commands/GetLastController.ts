import { ContextMessageUpdate } from "telegraf";
import dataSourceService from "../Services/DataSourceService";
import DatabaseService from "../Services/DatabaseService";

export default class GetLastController {

    static cmd(ctx: ContextMessageUpdate): void {

        DatabaseService.handleUsername(ctx, (username) => {
            if (username == null || username == undefined) {
                ctx.reply("/last username")
                return;
            }
            console.log(username);
            dataSourceService.getLastTracks(username, (tracks) => {
                ctx.reply(tracks.join("\n"))
            })
        })

    }

}

//const getLastController = new GetLastController();
//export default getLastController;