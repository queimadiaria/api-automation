import { getIntegrationLastClass } from "../requests/getIntegrationLastClass.request";

describe("GET /integration/last-class", () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it("Should get integration last class", function () {
    cy.get("@id").then((id) => {
      getIntegrationLastClass(id).then((response) => {
        expect(response.status).to.eq(200);

        const lastClass = response.body;
        const expectedProperties = {
          program: "object",
          completedPercent: "number",
          result: "object",
          previous: "object",
          next: "object",
        };

        for (const [key, value] of Object.entries(expectedProperties)) {
          if (typeof value === "string") {
            expect(lastClass).to.have.property(key).and.to.be.a(value);
          } else {
            expect(lastClass).to.have.property(key, value);
          }
        }

        const previousDetails = lastClass.previous;
        const expectedPreviousDetailsProperties = {
          content: "object",
          order: "string",
          watched: "boolean",
          seenDate: "string",
          contentId: "string",
          groupName: "string",
        };

        for (const [key, value] of Object.entries(
          expectedPreviousDetailsProperties
        )) {
          if (typeof value === "string") {
            expect(previousDetails).to.have.property(key).and.to.be.a(value);
          } else {
            expect(previousDetails).to.have.property(key, value);
          }
        }

        const detailsContent = previousDetails.content;
        const expectedDetailsContentProperties = {
          id: "number",
          moduleId: "number",
          name: "string",
          createdAt: "string",
          updatedAt: "string",
          metadata: "object",
          order: "number",
          vimeoVideoId: null,
          theoPlayerUrl: "string",
          theoPlayerId: "string",
          status: "string",
          streamMetadata: "object",
        };

        for (const [key, value] of Object.entries(
          expectedDetailsContentProperties
        )) {
          if (typeof value === "string") {
            expect(detailsContent).to.have.property(key).and.to.be.a(value);
          } else {
            expect(detailsContent).to.have.property(key, value);
          }
        }

        const detailsMetadata = detailsContent.metadata;
        expect(detailsMetadata).to.be.an("object").that.is.not.null;
        const expectedDetailsMetadataProperties = {
          name: "string",
          type: "string",
          media: "string",
          order: "number",
          jobName: "string",
          mediaHd: "string",
          legacyId: "string",
          imagePreview: "string",
          mediaFallback: "string",
        };

        for (const [key, value] of Object.entries(
          expectedDetailsMetadataProperties
        )) {
          if (typeof value === "string") {
            expect(detailsMetadata).to.have.property(key).and.to.be.a(value);
          } else {
            expect(detailsMetadata).to.have.property(key, value);
          }
        }
        const detailsStreamMetaData = detailsContent.streamMetadata;
        const expectedDetailsStreamMetadataProperties = {
          hd: "string",
          sd: "string",
          hls: "string",
          vttPreview: "string",
        };

        for (const [key, value] of Object.entries(
          expectedDetailsMetadataProperties
        )) {
          if (typeof value === "string") {
            expect(detailsMetadata).to.have.property(key).and.to.be.a(value);
          } else {
            expect(detailsMetadata).to.have.property(key, value);
          }
        }
      });
    });
  });
});
