import { getIntegrationListSegments } from '../requests/getIntegrationListSeg.request';

describe('GET /integration/list-segments/{language}', () => {
    const languages = ['pt-br', 'es-mx'];
    before(() => {
        cy.getAuthToken().as('id');
    });

    languages.forEach((language) => {
        it('Should return List Segments', function () {
            getIntegrationListSegments(this.id, language).then((response) => {
                cy.log(this.id, response)
                expect(response.status).to.eq(200);

                expect(response.body).to.be.an('object');
                const listSegments = response.body;
                const expectedProperties = [
                    'objectives',
                    'levels',
                    'modality',
                    'instructors',
                    'duration',
                    'durationTime',
                    'targets',
                    'gender'
                ];
                expectedProperties.forEach((property) => {
                    expect(listSegments).to.have.property(property);
                });
                listSegments.objectives.forEach(objectives => {
                    expect(objectives).to.have.property('id');
                    expect(objectives).to.have.property('value');
                    expect(objectives).to.have.property('description');
                    expect(objectives).to.have.property('link_image');
                });

                listSegments.levels.forEach(levels => {
                    expect(levels).to.have.property('id');
                    expect(levels).to.have.property('value');
                    expect(levels).to.have.property('expressionId');
                    expect(levels).to.have.property('link_image');
                    expect(levels).to.have.property('description');
                    expect(levels).to.have.property('name');
            });

                listSegments.modality.forEach(modality => {
                    expect(modality).to.have.property('id');
                    expect(modality).to.have.property('value');
                });

                listSegments.instructors.forEach(instructors => {
                    expect(instructors).to.have.property('id');
                    expect(instructors).to.have.property('link_image');
                    expect(instructors).to.have.property('value');
                });

                listSegments.duration.forEach(duration => {
                    expect(duration).to.have.property('id');
                    expect(duration).to.have.property('value');
                });

                listSegments.durationTime.forEach(durationTime => {
                    expect(durationTime).to.have.property('id');
                    expect(durationTime).to.have.property('value');
                });

                listSegments.targets.forEach(targets => {
                    expect(targets).to.have.property('id');
                    expect(targets).to.have.property('value');
                });

                listSegments.gender.forEach(gender => {
                    expect(gender).to.have.property('id');
                    expect(gender).to.have.property('value');
                    expect(gender).to.have.property('order');
                });



        });

    })
});
});